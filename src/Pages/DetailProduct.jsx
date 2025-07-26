import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi"; //icon
import { CiShoppingCart } from "react-icons/ci";
import { addToCart } from "../Features/ProductSlice";
import { toast } from "react-toastify";
import gsap from "gsap";

const DetailProduct = () => {
  const imgRef = useRef(null);
  const plusRef = useRef(null);

  const gsapAnimation = () => {
    console.log("gsap animation ...");

    const img = imgRef.current;
    const plus = plusRef.current;

    if (!img || !plus) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = plus.getBoundingClientRect();

    const clone = img.cloneNode(true);
    clone.style.position = "fixed";
    clone.style.left = `${imgRect.left}px`;
    clone.style.top = `${imgRect.top}px`;
    clone.style.width = `${imgRect.width}px`;
    clone.style.height = `${imgRect.height}px`;
    clone.style.zIndex = 9999;
    clone.style.borderRadius = "8px";

    document.body.appendChild(clone);

    gsap.to(clone, {
      duration: 0.8,
      left: cartRect.left,
      top: cartRect.top,
      width: 20,
      height: 20,
      opacity: 0.5,
      scale: 0,
      ease: "power2.inOut",
      onComplete: () => clone.remove(),
    });
  };

  const params = useParams();
  const allProducts = useSelector((state) => state.mySlice.allProducts);
  const Product = allProducts?.filter((item) => item.id == params.id);
  const [discReadMore, setdiscReadMore] = useState(false);
  const [showMoreBtn, setshowMoreBtn] = useState(false);
  const [mainImage, setmainImage] = useState(null);
  const [selectedSize, setselectedSize] = useState('S');
  const [qty, setqty] = useState(1);
  const navigate = useNavigate();

  const pTag = useRef(null);
  const dispatch = useDispatch();

  const cartHandler = (item) => {
    if (selectedSize.length === 0) {
      toast.info("please select size");
      return;
    } else {
      const updatedItem = {
        ...item,
        Sizes: selectedSize,
        quantity: qty,
      };

      dispatch(addToCart(updatedItem));

      navigate("/Cart");
    }
  };

  useEffect(() => {
    //mobile screen description
    const isMobile = window.innerWidth < 768;
    if (isMobile && pTag.current && pTag.current.scrollHeight > 80) {
      setshowMoreBtn(true);
    } else {
      setdiscReadMore(false);
    }
  }, []);

  useEffect(() => {
    if (Product?.[0]?.image?.[0]) {
      setmainImage((prev) => prev || Product[0].image[0]);
    }
  }, [Product]);

  return (
    <>
      <Link
        to={"/Collections"}
        className="w-full  text-sm  flex flex-nowrap justify-start items-center gap-2 text-gray-500 hover:text-black hover:font-semibold"
      >
        <BiArrowBack /> Back to Collection
      </Link>

      {Product?.map((item, index) => (
        <div
          key={item.id}
          className="w-full min-h-[80vh]  sm:p-5 flex flex-col lg:flex-row "
        >
          {/* // left ⬅️------------------------------------- */}
          <div
            key={item.id}
            className="leftSidePart  w-full lg:w-1/2 flex flex-row  lg:h-[80vh] border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-gray-500"
          >
            {/* main PIC 🖼️*/}
            <div
              ref={imgRef}
              className="Card w-full h-[70%] md:h-full rounded-2xl    justify-center "
            >
              <img
                src={mainImage}
                className=" h-[50vh] md:h-full object-cover"
              />
            </div>

            {/* 4️⃣ pics of same item*/}
            <div
              className={` other4Pic  w-1/4 md:w-2/4  flex flex-col  flex-nowrap gap-6 justify-center items-center md:p-4`}
            >
              <div
                onClick={() => setmainImage(Product[0].image[0])}
                className="img1 rounded-sm  hover:shadow-2xl  flex justify-center items-center hover:border-2 cursor-pointer bg-white border-[1px]  border-gray-500   h-15 w-15  md:h-25 md:w-25"
              >
                <img
                  src={item.image[0]}
                  alt=""
                  className=" h-full  object-contain"
                />
              </div>

              <div
                onClick={() => setmainImage(Product[0].image[1])}
                className="img2 rounded-sm hover:shadow-2xl flex justify-center items-center hover:border-2 cursor-pointer bg-white border-[1px]  border-gray-500   h-15 w-15 md:h-25 md:w-25 "
              >
                <img
                  src={item.image[1] || item.image[0]}
                  alt=""
                  className=" h-full object-cover"
                />
              </div>

              <div
                onClick={() => setmainImage(Product[0].image[2])}
                className="img3 rounded-sm hover:shadow-2xl flex justify-center items-center hover:border-2 cursor-pointer bg-white border-[1px]  border-gray-500   h-15 w-15 md:h-25 md:w-25 "
              >
                <img
                  src={item.image[2] || item.image[0]}
                  alt=""
                  className=" h-full object-cover"
                />
              </div>

              <div
                onClick={() => setmainImage(Product[0].image[3])}
                className="img4 rounded-sm hover:shadow-2xl flex justify-center items-center hover:border-2 cursor-pointer bg-white border-[1px]  border-gray-500   h-15 w-15 md:h-25 md:w-25 "
              >
                <img
                  src={item.image[3] || item.image[0]}
                  alt=""
                  className=" h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ---------------// right ➡️------------------------------------------ */}

          <div className="right w-full md:w-1/2 lg:pl-6 text-xl md:text-3xl md:gap-3 font-semibold font-[LoginFont] md:min-h-[80vh] p-2  flex flex-col justify-start items-start ">
            {/* Name */}
            <div className="Name md:flex-col">
              <h4 className="text-gray-300 text-xs">Product Name:</h4>
              <h2>{item.name}</h2>
            </div>
            {/* Discription for AFTER Medium screen: */}
            <div className=" flex-col hidden md:block">
              <h4 className="text-black text-xl">Discription:</h4>
              <p className="text-justify text-sm text-gray-500 font-sans">
                {item.description}
              </p>
            </div>

            {/* Sizes: */}
            <div className=" flex-col md:my-2">
              <h4 className="text-black text-xl">Sizes:</h4>
              <div className="allSizes flex justify-center items-center text-xl gap-3">
                {item.Sizes.map((size, index) => (
                  <input
                    key={size}
                    type="button"
                    value={size}
                    onClick={() => setselectedSize(size)}
                    className={`${
                      selectedSize === size
                        ? "bg-[var(--main-color)] text-white"
                        : "bg-transparent "
                    } rounded-3xl active:scale-90 hover:bg-black/70 hover:text-white text-gray-500 cursor-pointer hover:shadow-2xl py-1 md:py-2 px-4`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className=" flex flex-row gap-3 justify-center items-center ">
              <h4 className="text-black text-xl">Quantity:</h4>
            </div>

            {/*quantity Buttons */}
            <div className="ENTER  flex flex-row gap-4 justify-center items-center md:border-b-2 border-gray-500 pb-3 md:pb-6">
              <button
                ref={plusRef}
                onClick={() => {
                  setqty((prev) => (prev += 1));
                  gsapAnimation();
                }}
                className="buttonAdd px-4 py-2 rounded-lg hover:rounded-sm transition-all duration-100 cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-thin hover:shadow-2xl"
              >
                +
              </button>

              <input
                type="number"
                value={qty}
                readOnly
                className="w-[2ch] px-1 text-center outline-none select-none cursor-default"
              />

              <button
                onClick={() => setqty((prev) => (prev > 1 ? prev - 1 : prev))}
                className="buttonAdd px-4 py-2 rounded-lg hover:rounded-sm transition-all duration-100 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-thin hover:shadow-2xl"
              >
                -
              </button>
            </div>

            <button
              onClick={() => cartHandler(item)}
              to={"/Cart"}
              className="blackAddtoCart w-full lg:w-auto cursor-pointer text-xl flex gap-3 justify-center focus:scale-95 active:scale-90 items-center hover:bg-gray-500 px-8 py-3 pointer-coarse: hover:shadow-2xl bg-black text-white rounded-sm "
            >
              <span className="CartIcon">
                <CiShoppingCart />
              </span>{" "}
              Add to Cart
            </button>

            {/* Discription for mobil screen: */}
            <div className="relative flex-col  md:hidden py-6">
              <h4 className="text-black text-xl ">Discription:</h4>
              <p
                ref={pTag}
                className={`${
                  !discReadMore ? "h-20 overflow-y-hidden" : "h-auto"
                }  text-justify text-sm text-gray-500  pb-12 font-sans`}
              >
                {item.description}
              </p>
              <button
                className={`${
                  showMoreBtn ? "block" : "hidden"
                } absolute bottom-0 right-0 font-sans text-xs text-gray-500 "`}
                onClick={() => setdiscReadMore((prev) => !prev)}
              >
                {!discReadMore ? "Read More..." : "Show less"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailProduct;
