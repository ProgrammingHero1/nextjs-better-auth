"use client";
import { signIn, signUp } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const SignUpPage = () => {

    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // Convert FormData to plain object

        console.log('data from the form', data)

        const {data: resData, error} = await signUp.email({
            name: data.name,
            email: data.email, 
            password: data.password
        });

        console.log( 'after sign up',resData, error)
    };

    const handleGoogleSignUp = async () => {
        try {
            const resData = await signIn.social({
                provider:'google'
            })
            console.log('after google sign in', resData)
        } catch (err) {
            console.error('Google sign-up error:', err)
        }
    }
    return (
        <div>
            <h2>Please Sign up</h2>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        {/* <Check /> */}
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>

            <p>OR</p>
            <button onClick={handleGoogleSignUp} className='bg-blue-600 text-3xl text-yellow-100 rounded-3xl'>Sign Up Google</button>
        </div>
    );
};

export default SignUpPage;