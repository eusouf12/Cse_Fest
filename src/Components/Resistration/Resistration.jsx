import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { CgChevronDoubleRight } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";


const Resistration = () => {
    return (
        <div className='space-y-10 py-5 max-w-6xl mx-auto'>
            <div className='flex justify-center'>
                <div className="space-y-2 text-center">
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-blue-900 font-medium md:font-semibold lg:font-bold'>
                        Registration
                    </h1>
                    <p className=" text-lg lg:text-2xl text-black">( Deadline : 20 November )</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {/* contest  */}
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Use_of_C_language.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>

                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold ">Programming Contest <br></br> <span className="text-lg text-cyan-500">( Open To All College Affiliated Under NU 1st & 2nd Year )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. Programming contests are a fun and educational way to learn and apply computer science concepts in real-world scenarios.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>

                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion 5K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>First Runner-Up 3K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Second Runner-Up 2K</h3>
                                </div>
                            </div>

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
                                    <h3>Chest card</h3>
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
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Snacks </h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Coffee</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="card-actions flex px-10 pb-10">
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
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://cdn.prod.website-files.com/646caab5700fe0d1824a61b9/65170c1e01c86d489de784dd_hackathon.png"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold ">Hackathon <br></br> <span className="text-lg text-start text-cyan-500">( Open To All Current College Students & Recent NU Graduates  )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The CSE FEST 2K24 is organized by Programming Club & Department of Computer Science & Engineering (CSE), Tejgaon College, Dhaka. It is a platform for developers to showcase innovative ideas, promoting creativity, and skill-building while connecting with peers.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">1000 BDT (PER TEAM)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion 8K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Runner-Up 5K</h3>
                                </div>
                            </div>

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
                                    <h3>Chest card</h3>
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
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Snacks </h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Coffee</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 pb-10">
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
                {/* Fifa */}
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYR_XN65K2W52UWgmw2fWb1wOMV-X4hUqLw&s"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold ">Fifa-2024 <br></br> <span className="text-lg text-cyan-500">( Open For Anyone )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                            The FIFA 24 Contest at CSE FEST 2K24, organized by the Programming Club & CSE Department of Tejgaon College, Dhaka, will gather gamers to compete in virtual football matches,offering an exciting chance to showcase their skills in EA Sports' FIFA video game.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">500 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion 8K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Runner-Up 5K</h3>
                                </div>
                            </div>
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
                                    <h3>Chest card</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Coffee</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Snacks</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 pb-10">
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
                 
                {/* Chess */}
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2PoTRaX1juNJy6tXAtldJbzd-PSJyjjXNg&s"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold ">Chess <br></br> <span className="text-lg text-cyan-500">( Open For Anyone )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                                The Chess segment of CSE FEST 2K24, organized by the Programming Club & Department of Computer Science & Engineering (CSE) at Tejgaon College, Dhaka, will test participants' strategic thinking and mental agility as they compete in a series of intense matches, aiming to outsmart their opponents and claim victory on the chessboard.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">300 BDT (PER PERSON)</p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion 3K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3> Runner-Up 2K</h3>
                                </div>
                            </div>
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
                                    <h3>Chest card</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Coffee</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <CgChevronDoubleRight />
                                    </div>
                                    <h3>Snacks</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex  px-10 pb-10">
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
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://www.dragnsurvey.com/blog/en/wp-content/uploads/2024/02/quiz-line-computer.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold ">Quiz <br></br> <span className="text-lg text-cyan-500">( Open For Only  Tejgaon College )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                            he quiz segment of CSE FEST 2K24, organized by the Programming Club & Department of Computer Science & Engineering (CSE) at Tejgaon College, Dhaka, will challenge participants on a wide range of exciting and engaging technical and general knowledge topics.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">250 BDT (PER PERSON)</p>
                            
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion Gift</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>First Runner-Up Gift</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Second Runner-Up Gift</h3>
                                </div>
                            </div>

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
                                    <h3>Chest card</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex  px-10 pb-10">
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
                {/* Poster Design */}
                <div className="card col-span-1 bg-base-200  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.freepik.com/premium-vector/vector-banners-about-data-technology_8071-26701.jpg"
                            alt="fest"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body space-y-3">
                        <h2 className="text-2xl  text-blue-900 font-semibold md:font-semibold lg:font-bold">Poster Design <br></br> <span className="text-lg text-cyan-500">( Open For Anyone )</span></h2>
                        <div className="space-y-1">
                            <p className="text-sm font-normal lg:font-medium text-justify">
                            The Poster Design segment of CSE FEST 2K24, organized by the Programming Club & Department of Computer Science & Engineering (CSE) at Tejgaon College, invites creative minds to showcase their skills by designing posters on technology-related themes, offering a platform to express innovation through design.
                            </p>
                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">Registration Fees for Competition : </h3>
                            <p className="text-sm">300 BDT (PER PERSON)</p>

                            <h3 className="text-lg  text-rose-600 font-medium md:font-semibold lg:font-semibold">prize money : </h3>
                            <div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Champion 3K</h3>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div>
                                        <GoDotFill />
                                    </div>
                                    <h3>Runner-Up 2K</h3>
                                </div>
                            </div>
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
                                    <h3>Chest card</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="card-actions flex px-10 pb-10">
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