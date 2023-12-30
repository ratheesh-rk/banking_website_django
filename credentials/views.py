from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.shortcuts import render, redirect


# Create your views here.
def login(request):
    if request.method== 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)

        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else:
            messages.info(request,'Invalid Credentials')
            return redirect('login')
    return render(request,"login.html")
def register(request):
    if request.method =="POST":
        username = request.POST['username']
        password = request.POST['password']
        confirmpassword = request.POST['confirmpassword']
        if password==confirmpassword:
            if User.objects.filter(username=username).exists():
                messages.info(request,"Username Taken")
                return redirect('register')
            else:
                user = User.objects.create_user(username=username,password=password)

                user.save();
                return redirect('login')
        else:
            messages.info(request,"Password not matching")
            return redirect('register')
        return redirect('/')

    return render(request,'register.html')

def logout(request):
    auth.logout(request)
    return redirect('/')


def form(request):
    if request.method == 'POST':
        full_name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        date_of_birth = request.POST.get('dob')
        age = request.POST.get('age')
        address = request.POST.get('address')
        gender = request.POST.get('gender')
        district = request.POST.get('district')
        branch = request.POST.get('branch')
        materials = request.POST.get('materials[]')

        # Check if all fields are filled
        if all([full_name, email, phone_number, date_of_birth, age, address, gender, district, branch, materials]):
            # Process the form data (you can save it to the database or perform other actions)

            # Set success message
            messages.success(request, 'Application accepted!')

            # Redirect to the home page
            return render(request, "form.html")
        else:
            # If any field is not filled, set an error message
            messages.error(request, 'Please fill in all required fields.')

    return render(request, "form.html")

def about(request):
    return render(request,"about.html")