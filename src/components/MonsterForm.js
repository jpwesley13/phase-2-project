import React, {useState} from "react";

function MonsterForm() {
    const [formData, setFormData] = useState({
        name: "",
        series: "",
        origin: "",
        risk: "",
        rarity: "",
        image: "",
    });

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
}