from django.urls import path
from api.views import UserRegistrationView,UserloginView

urlpatterns = [
    path('register/',UserRegistrationView.as_view(),name='register'),
    path('login/',UserloginView.as_view(),name='login'),
]
