from django.contrib import admin
from api.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.

class UserModelAdmin(BaseUserAdmin):

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.

    # python admin database me jaha particular user ka data(object) show hoga 
    list_display = ["id","email", "name", "is_admin"]
    list_filter = ["is_admin"]
    fieldsets = [
        ('User Credentials', {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name"]}),
        ("Permissions", {"fields": ["is_admin"]}),
    ]

    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    # django admin me jaha data(object) add krte he waha input 

    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["name","email", "password1", "password2"],
            },
        ),
    ]
    search_fields = ["email"]
    ordering = ["id","email"]
    filter_horizontal = []


# Now register the new UserAdmin...
admin.site.register(User, UserModelAdmin)
