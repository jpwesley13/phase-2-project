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

    function handleChange(e){
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function handleSubmit(e){
        e.preventDefault()

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
        .then(data => {
            onAddMonster(data);
            setFormData({})
        });
    };

    return (
        <div>
            <h3>Add New Monster Sighting!</h3>
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
                    <option value="" disabled selected>Location</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Western Eurasia">Western Eurasia</option>
                    <option value="East Asia">East Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Poles">Poles</option>
                    <option value="Cyberspace">Cyberspace</option>
                </select>
                <select
                name="risk"
                value={formData.risk}
                onChange={handleChange}>
                    <option value="" disabled selected>Risk Factor</option>
                    <option value="✰✰✰✰✰">✰✰✰✰✰</option>
                    <option value="★✰✰✰✰">★✰✰✰✰</option>
                    <option value="★★✰✰✰">★★✰✰✰</option>
                    <option value="★★★✰✰">★★★✰✰</option>
                    <option value="★★★★✰">★★★★✰</option>
                    <option value="★★★★★">★★★★★</option>
                </select>
                <select name="rarity"
                value={formData.rarity}
                onChange={handleChange}
                >
                    <option value="" disabled selected>Rarity</option>
                    <option value="Only one">Only One</option>
                    <option value="Very rare">Very Rare</option>
                    <option value="Rare">Rare</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Common">Common</option>
                    <option value="Very Common">Very Common</option>
                    <option value="Everywhere">Everywhere</option>
                </select>
                <input label="Image url" placeholder="Image url for sighting" name="image"
                value={formData.image}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};

export default MonsterForm;