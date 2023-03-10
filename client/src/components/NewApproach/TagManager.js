import React, { useState, useEffect } from "react";
// import TagDisplay from "../../components/TagDisplay/TagDisplay";
import axios from "axios";
// import AllTags from "../../components/concept/AllTags";
import TagsCreator from "./TagsCreator";
import NavBar from "../NavBar/NavBar";
// import Css from "./Css";
// import DiscreteSliderSteps from "./Css";


const TagManager = (props) => {
    const [frontEnds, setFrontEnds] = useState([]);
    const{userProjects}= props
    // const [loaded, setLoaded] = useState(false);




    useEffect(() => {
    axios.get("http://localhost:8000/api/frontEnds")
        .then((res) => {
            setFrontEnds(res.data);
            // setLoaded(true);
        })
        .catch((err) => console.error(err));
    }, []);

    const createFrontEnd = (frontEnd) => {
        axios
        .post("http://localhost:8000/api/frontEnds", frontEnd)
        .then((res) => {
            setFrontEnds([...frontEnds, res.data]);
        })
        .catch((err) => console.error(err));
    };

    const updateFrontEnd = (newTag) => {
        // console.log(toUpdate, "this should be the id");
        axios.put("http://localhost:8000/api/frontEnds/", newTag)
        .then((res) => {
            // console.log(toUpdate + "the updated is ");
        })
        .catch((err) => console.error(err));
    };

    return (
        <>
        <NavBar/>
            <TagsCreator
                onNewFrontEnd={createFrontEnd}
                onNewUpdate={updateFrontEnd}
                userProjects={userProjects}
            />
        </>
    );
};
export default TagManager;
