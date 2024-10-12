import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { CgChevronDoubleRight } from "react-icons/cg";


const Resistration = () => {
    return (
        <div className='space-y-10 py-5 max-w-6xl mx-auto'>
            <div className='flex justify-center'>
                <div className="space-y-2">
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-blue-900 font-medium md:font-semibold lg:font-bold'>
                        Registration
                    </h1>
                    <p className="text-center text-xl lg:text-2xl text-black">( Deadline : 20 November )</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {/* context  */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_of_C_language.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>

                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Programming Contest </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. Programming contests are a fun and educational way to learn and apply computer science concepts in real-world scenarios.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Note Book</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Pen</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Lunch</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card-actions flex px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                {/* Hackathon  */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Hackathon </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. It is a platform for developer to showcase their innovative ideas and projects.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Note Book</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Pen</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Lunch</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                {/* Quiz */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_of_C_language.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Quiz </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The quiz segment of CSE FEST 2K24, organized by the Programming Club & Department of Computer Science & Engineering (CSE) at Tejgaon College, Dhaka, will challenge participants on a range of technical and general knowledge topics.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex  px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                {/* context  */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_of_C_language.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Programming Contest </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. Programming contests are a fun and educational way to learn and apply computer science concepts in real-world scenarios.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Note Book</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Pen</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Lunch</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                {/* Hackathon  */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Hackathon </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. It is a platform for developer to showcase their innovative ideas and projects.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Note Book</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Pen</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Lunch</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                {/* Quiz */}
                <div className="card col-span-1 bg-base-100  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_of_C_language.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl text-blue-900 font-semibold md:font-semibold lg:font-bold text-center">Quiz </h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The quiz segment of CSE FEST 2K24, organized by the Programming Club & Department of Computer Science & Engineering (CSE) at Tejgaon College, Dhaka, will challenge participants on a range of technical and general knowledge topics.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">You will get :</h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>T-Shirt</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex  px-10 py-10">
                        <button className="btn bg-rose-600 text-white text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Rules</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-blue-500">Comming Soon !!!!</h3>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn text-rose-600"><ImCross /></button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                        <Link to="https://translate.google.com/">
                            <button className="btn bg-cyan-500 text-white text-xl">Registration</button>
                        </Link>
                    </div>
                </div>
                




            </div>
        </div>
    );
};

export default Resistration;