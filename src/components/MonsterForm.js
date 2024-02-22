import React, {useState} from "react";

function MonsterForm({onAddMonster}) {
    const [formData, setFormData] = useState({
        name: "",
        series: "",
        origin: "",
        risk: "",
        rarity: "",
        image: "",
    });
    // const [option, setOption] = useState("The Mind")

    function handleChange(e){
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleSubmit(){
        const monsterData = {
            name: formData.name,
            series: formData.series,
            origin: formData.origin,
            risk: formData.risk,
            rarity: formData.rarity,
            image: formData.image
        };
        fetch(`http://127.0.0.1:3000/monster`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(monsterData)
        })
        .then(res => res.json())
        .then(data => onAddMonster(data))
    };

    return (
        <div>
            <h3>Add monster sighting!</h3>
            <form
            onSubmit={handleSubmit}>
                <input label="Name" placeholder="Name" name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <input label="Series" placeholder="Series" name="series"
                value={formData.series}
                onChange={handleChange}
                />
                <select 
                value={formData.origin}
                onChange={handleChange}
                name="origin">
                    <option value="option1">North America</option>
                    <option value="option2">South America</option>
                    <option value="option3">Western Eurasia</option>
                    <option value="option4">East Asia</option>
                    <option value="option5">Africa</option>
                    <option value="option6">Oceania</option>
                    <option value="option7">Poles</option>
                    <option value="option8">Cyberspace</option>
                </select>
                <input label="Risk Factor" placeholder="Risk Factor" name="risk"
                value={formData.risk}
                onChange={handleChange}
                />
                <input label="Rarity" placeholder="Rarity" name="rarity"
                value={formData.rarity}
                onChange={handleChange}
                />
                <input label="Image url" placeholder="Image url for sighting" name="image"
                value={formData.image}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}