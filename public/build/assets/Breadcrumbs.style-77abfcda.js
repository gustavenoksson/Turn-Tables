import{s as m}from"./app-7a5f6de1.js";const i=m.div`
    font-size: 0.8rem;
    margin: .5rem auto;
    margin-top: ${r=>r.$singleProduct?"2rem":"0"};
    margin-bottom: ${r=>!r.$singleProduct&&"2rem"};

    @media (min-width: 500px) {
        ${r=>r.$singleProduct&&"max-width: 800px"};
    }
`;export{i as B};
