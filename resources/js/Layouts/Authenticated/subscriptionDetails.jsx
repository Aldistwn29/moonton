export default function SubpscriptionDetails({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    const remainingDays = activeDays - remainingActiveDays;
    const LoadProgres = () => {
        const progress = remainingDays / activeDays;
        if (progress > 0.25) {
            return 'w-3/12';
        } else if (progress > 0.5) {
            return 'w-6/12';
        }else if (progress > 0.75) {
            return 'w-9/12';
        } else {
            return 'w-full';
        }
    }
    return (
        <>
            {/* Besic */}
            {!isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                        <div className="mb-8 text-lg font-semibold text-black">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-black">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                            <div className="w-2/12 h-full rounded-full bg-alerange"></div>
                        </div>
                    </div>
                </div>
            )}
            {/* Premium */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/assets/icons/ic_star-rounded.svg" alt="" />
                        <div>
                            <div className="mt-8 mb-4 text-lg font-semibold text-white">
                                {name}
                            </div>
                        </div>
                        <div className="mb-2 text-sm text-white">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                            <div className={`rounded-full h-full bg-alerange ${LoadProgres()}`}></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}