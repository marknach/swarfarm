from rest_framework.renderers import BrowsableAPIRenderer


class NoFormBrowsableAPIRenderer(BrowsableAPIRenderer):
    def get_rendered_html_form(self, *args, **kwargs):
        return ''