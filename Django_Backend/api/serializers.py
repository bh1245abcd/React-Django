from rest_framework import serializers
from api.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    # we are writing this becoz we need confirm password field in our Registratin Request
    password2 = serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model = User
        fields = ['email','name','password','password2']
        extra_kwargs={
            'password':{'write_only':True}
        }

# Validating password and Confirm password while Registration

    def validate(self,attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password != password2:
            raise serializers.ValidationError("Password and Confirm Password doesn't match")
        return attrs

    def create(self,validate_data):
        return User.objects.create_user(**validate_data)
    



class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255,)
    class Meta:
        model = User
        fields = ['email','password']