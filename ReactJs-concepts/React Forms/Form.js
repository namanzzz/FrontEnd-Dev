import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
// yup for validation purpose


export const Form = () =>{

    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        email: yup.string().email().required("Email format is not correct"),
        age: yup.number().positive().integer().min(18).required("age must be atleast 18"),
        password: yup.string().min(4).max(12).required("password should be between 4 and 12 characters"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords do not match").required()


    })
    const { register, handleSubmit, formState: {errors} } = useForm(
        {
            resolver:  yupResolver(schema)
        }
    );




    const onSubmit=(data)=>{
        console.log(data);
    };

    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>

            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>

            <input type="password" placeholder="Password..." {...register("password")} />
            <p>{errors.password?.message}</p>

            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>

            <input type="submit" />
        </form>
    );
};