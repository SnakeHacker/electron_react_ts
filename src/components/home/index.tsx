import React, { useEffect, useState } from "react";

const HomePage = () => {

    useEffect(()=>{
        (window as any).api.send("toMain", "some data");
    }, []);

    return (
    <div>
        23333
    </div>
    );
}

export default HomePage;