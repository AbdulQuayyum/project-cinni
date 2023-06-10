import React, { useState } from "react";
import StepWizard from "react-step-wizard";

import { StepsNavbar, Address, Order, Payment } from "@/Components/Index";
import StepsLayout from "@/Layout/Steps.Layout";

export default function Steps(props) {
    const [state, updateState] = useState({ form: {} });

    const setInstance = (SW) =>
        updateState({
            ...state,
            SW,
        });

    return (
        <StepsLayout>
            <StepWizard
                isHashEnabled
                nav={<StepsNavbar />}
                instance={setInstance}
                className="relative flex flex-col items-center pt-0 sm:pt-40 min-h-screen"
            >
                <Address hashKey={"one"} />
                <Payment hashKey={"two"} />
                <Order hashKey={"three"} />
            </StepWizard>
        </StepsLayout>
    )
}
