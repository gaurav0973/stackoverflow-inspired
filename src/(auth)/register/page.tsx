import { useAuthStore } from "@/store/Auth"
import { useState } from "react"

export default function Register() {

    const {login, createAccount} = useAuthStore
    const [isloading, SetIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const password = formData.get("password")

        if(!firstname || !lastname || !email || !password){
            setError(()=>"Please Fill out all fields")
            return
        }

        SetIsLoading(()=>true)
        setError(()=> "")

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email.toString(),
            password.toString()
        )

        if(response.error){
            setError(()=> response.error!.message)
        }else{
            const loginResponse = await login(email.toString(), password.toString())
            if(loginResponse.error){
                setError(()=> loginResponse.error!.message)
            }
        }
        SetIsLoading(()=> false)
    }









  return (
    <div>RegisterPage</div>
  )
}
