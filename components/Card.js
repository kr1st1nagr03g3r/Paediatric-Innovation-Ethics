const Card = props => (
    <>
        <div className="bg-[#00A122] justify-center flex flex-row">
            <div className="bg-[#C4C4C4] w-[960px]">
                <div className="bg-[#fff] mt-8 mx-8">
                    <div className="m-[0.5rem]">
                        <div className="basis-3/4 py-[30px]"><div className="flex flex-row justify-center align-center content-center">{props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Card