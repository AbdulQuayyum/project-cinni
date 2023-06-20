import React, { useState } from "react";
import StepWizard from "react-step-wizard";

import { StepsNavbar, Information, Order, Payment } from "@/Components/Index";
import StepsLayout from "@/Layout/Steps.Layout";

export default function Steps(props) {
    const [state, updateState] = useState({ form: {} });

    const setInstance = (SW) =>
        updateState({
            ...state,
            SW,
        });

    return (
        <StepsLayout Title='Odering Process'>
            <StepWizard
                // isHashEnabled
                nav={<StepsNavbar />}
                instance={setInstance}
                className="relative flex flex-col w-full items-center pt-0 sm:pt-40"
            >
                <Information hashKey={"one"} />
                <Payment hashKey={"two"} />
                <Order hashKey={"three"} />
            </StepWizard>
        </StepsLayout>
    )
}
