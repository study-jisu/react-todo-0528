import React from "react";
import { useSearchParams } from "react-router-dom";


const About = ({ location }) => {
    const [searchParams] = useSearchParams();
    const detail = searchParams.get('detail') === 'true';
    return (
        <>
            <h1>Introduce</h1>
            <p>소개 페이지</p>
            {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
        </>
    )
}

export default About;
