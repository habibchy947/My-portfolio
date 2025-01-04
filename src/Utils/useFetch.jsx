import { useEffect, useState } from "react"

export const useFetch = (data) => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
            fetch(data)
                .then(res => res.json())
                .then(data => setSkills(data))
        }, [])
        return skills
}