import { useState } from "react";
import NavBar from "../components/NavBar";

function Series() {

    return (
        <>
        <header>
            <NavBar />
        </header>
        </>
    );
};

export default Series;

//I want to create a card template for each series. It'd be cool if they had their own logos but for this project I think I'd better not.

//By default there should be a search bar or filter option to find monsters by series. A filter option is cool, but I am unsure if I can make it dynamic to newly added series or not. If so, I definitely want to do it this way.

//Put series values state in parent component ([]). Pass a function from parent to monsterform that will update series values when a new monster is added. In parent, implement the function to update the list of unique series values. function takes (newMonsterData) as a parameter and updates state variable. Change onAddMonster to call this function passed from parent, passing newMonsterData as the argument. Reset fields by resetting formData state to its original self.