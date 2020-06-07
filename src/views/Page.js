import React from "react";
import {useParams} from "react-router-dom";

export default function Page() {
    const { page } = useParams();

    return <div>Page: {page}</div>;
}