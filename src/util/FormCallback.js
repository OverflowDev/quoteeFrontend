import { useState } from "react";
import { toast } from "react-hot-toast";

export const useForm = (callback, initialState = {}) => {
    
    const [formData, setFormData] = useState(initialState)

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        callback()
        // .then(toast.success('successfull'))
        // .catch(toast.error('error'))
    }

    return {
        onChange,
        onSubmit,
        formData
    }
}