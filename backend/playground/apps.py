from django.apps import AppConfig

# Where we configure this app, should be named configs
class PlaygroundConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'playground'
