const StepsNavbar = (props) => {
    const dots = [];
    //   const List = [
    //   "Address",
    //   "Payment Method",
    //   "Place Order",
    // ]
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        const isPreviousActive = props.currentStep < i;
        dots.push((
            <li
                key={`step-${i}`}
                className={`step ${isActive || !isPreviousActive ? "step-primary" : ""}
          ${isActive ? "ball" : ""}`}
            // onClick={(isActive || !isPreviousActive) ? (() => props.goToStep(i)) : undefined}
            >
                {/* {List[i - 1]} */}
            </li>
        ))
    }
    return (
        <section className="container flex flex-wrap items-center justify-center w-full py-6 text-center lg:py-10 ">
            {/* <div className='mx-auto '>{dots}</div> */}
            <ul className="w-full pt-6 steps dark:text-gray-100 lg:w-auto lg:py-0">
                {dots}
            </ul>
        </section>
    );
};

export default StepsNavbar