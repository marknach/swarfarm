from django import forms

from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit, Div, Layout, Field, Button, Fieldset
from crispy_forms.bootstrap import FormActions, FieldWithButtons

from bestiary.models import *

import autocomplete_light


# Bestiary forms
class BestiaryQuickSearchForm(forms.Form):
    monster_name = autocomplete_light.ModelChoiceField('BestiaryLinkAutocomplete')

    helper = FormHelper()
    helper.form_action = 'bestiary:home'
    helper.form_method = 'get'
    helper.form_class = 'navbar-form navbar-left hidden-md hidden-sm'
    helper.form_show_labels = False
    helper.layout = Layout(
        FieldWithButtons(
            'monster_name',
            Submit('Go', 'Go'),
        ),
    )


class FilterMonsterForm(forms.Form):
    name__icontains = forms.CharField(
        label='Monster Name',
        max_length=100,
        required=False,
    )
    base_stars = forms.MultipleChoiceField(
        choices=Monster.STAR_CHOICES,
        required=False,
    )
    element = forms.MultipleChoiceField(
        label='Element',
        choices=Monster.ELEMENT_CHOICES,
        required=False,
    )
    archetype = forms.MultipleChoiceField(
        label='Archetype',
        choices=Monster.TYPE_CHOICES,
        required=False,
    )
    is_awakened = forms.NullBooleanField(label='Awakened', required=False, widget=forms.Select(choices=((None, '---'), (True, 'Yes'), (False, 'No'))))
    fusion_food = forms.NullBooleanField(label='Fusion Food', required=False, widget=forms.Select(choices=((None, '---'), (True, 'Yes'), (False, 'No'))))
    leader_skill__attribute = forms.MultipleChoiceField(
        label='Leader Skill Stat',
        choices=LeaderSkill.ATTRIBUTE_CHOICES,
        required=False,
    )
    leader_skill__area = forms.MultipleChoiceField(
        label='Leader Skill Area',
        choices=LeaderSkill.AREA_CHOICES,
        required=False,
    )
    skills__scaling_stats__pk = forms.MultipleChoiceField(
        label='Skill Scales With',
        choices=ScalingStat.objects.values_list('pk', 'stat'),
        required=False,
    )
    buffs = forms.MultipleChoiceField(
        label='Buffs',
        choices=Effect.buff_effect_choices.all(),
        required=False,
    )
    debuffs = forms.MultipleChoiceField(
        label='Debuffs',
        choices=Effect.debuff_effect_choices.all(),
        required=False,
    )
    other_effects = forms.MultipleChoiceField(
        label='Other Effects',
        choices=Effect.other_effect_choices.all(),
        required=False,
    )
    effects_logic = forms.BooleanField(
        label='Effect filter logic',
        required=False,
    )
    page = forms.IntegerField(required=False)
    sort = forms.CharField(required=False)

    helper = FormHelper()
    helper.form_method = 'post'
    helper.form_id = 'FilterBestiaryForm'
    helper.layout = Layout(
        Div(
            Fieldset(
                'General',
                Field('name__icontains', wrapper_class='form-group-sm form-group-condensed'),
                Div(
                    Field('base_stars', css_class='select2-stars', wrapper_class='form-group-sm form-group-condensed col-md-4'),
                    Field('is_awakened', css_class='auto-submit', wrapper_class='form-group-sm form-group-condensed col-md-4'),
                    Field('fusion_food', css_class='auto-submit', wrapper_class='form-group-sm form-group-condensed col-md-4'),
                    css_class='row'
                ),
                Div(
                    Field('element', css_class='select2-element', wrapper_class='form-group-sm form-group-condensed col-md-6'),
                    Field('archetype', css_class='select2', wrapper_class='form-group-sm form-group-condensed col-md-6'),
                    css_class='row',
                ),
                css_class='col-md-4'
            ),
            Fieldset(
                'Skills',
                Field('buffs', css_class='select2', wrapper_class='form-group-sm form-group-condensed'),
                Field('debuffs', css_class='select2', wrapper_class='form-group-sm form-group-condensed'),
                Field('other_effects', css_class='select2', wrapper_class='form-group-sm form-group-condensed'),
                Field('effects_logic', data_toggle='toggle', data_on_text='ANY', data_on_color='primary', data_off_text='ONE', data_off_color='primary', data_size='small', wrapper_class='form-group-sm form-group-condensed'),
                css_class='col-md-4'
            ),
            Fieldset(
                'Leader Skills',
                Field('leader_skill__attribute', css_class='select2', wrapper_class='form-group-sm form-group-condensed'),
                Field('leader_skill__area', css_class='select2', wrapper_class='form-group-sm form-group-condensed'),
                css_class='col-md-4'
            ),
            css_class='row'
        ),
        Div(
            Submit('apply', 'Apply', css_class='btn-success'),
            Button('resetBtn', 'Reset Filters', css_class='btn-danger reset'),
            css_class='btn-toolbar'
        ),
        Field('page', value=1, type='hidden'),
        Field('sort', value='', type='hidden'),
    )

    def clean(self):
        super(FilterMonsterForm, self).clean()

        # Coalesce the effect fields into a single one that the filter can understand
        selected_buff_effects = self.cleaned_data.get('buffs')
        selected_debuff_effects = self.cleaned_data.get('debuffs')
        selected_other_effects = self.cleaned_data.get('other_effects')
        self.cleaned_data['skills__skill_effect__pk'] = selected_buff_effects + selected_debuff_effects + selected_other_effects


# Superuser edit forms
class SkillForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(SkillForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper(self)
        self.helper.form_method = 'post'
        self.helper.form_action = 'bestiary:edit_skill'
        self.helper.form_class = 'ajax-form'
        self.helper.layout = Layout(
            Field('name'),
            Field('com2us_id'),
            Field('description'),
            Field('slot'),
            Field('skill_effect'),
            Field('cooltime'),
            Field('hits'),
            Field('aoe'),
            Field('passive'),
            Field('max_level'),
            Field('level_progress_description'),
            Field('icon_filename'),
            Field('atk_multiplier'),
            FormActions(
                Submit('submit', 'Submit')
            )
        )

    class Meta:
        model = Skill
        exclude = ('pk', 'effect', 'scales_with')
