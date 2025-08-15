import React, { useState } from "react";
import ProductDisplay from "../Components/ProductDisplay";
import Title from "./../Components/Title.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; //icon
import { BiArrowBack } from "react-icons/bi"; //icon
import { Link } from "react-router-dom";

const Collections = () => {
  const allProductsFromRedux = useSelector(
    (state) => state.mySlice.allProducts
  );

  const srchInputFromStore = useSelector((state) => state.mySlice.Search);

  const [AllProducts, setAllProducts] = useState(); //FIXME:
  const [selectCatg, setselectCatg] = useState([]); //checkbox Men, Women, Kid ✅
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [filterBOX, setfilterBOX] = useState(false);
  const [PricefilterBOX, setPricefilterBOX] = useState(false);

  const SearchFilterHandler = () => {
    if (allProductsFromRedux && srchInputFromStore.length === 0) {
      setAllProducts(allProductsFromRedux);
    }
    if (srchInputFromStore.length > 0) {
      const searchBasedProductOnly = allProductsFromRedux?.filter((item) =>
        item.name.toLowerCase().includes(srchInputFromStore)
      );
      setAllProducts(searchBasedProductOnly);
      console.log("items name:", searchBasedProductOnly);
    }
  };

  // to add and remove Men, women, kid etc
  const categoryHandler = (catg) => {
    setselectCatg(
      (prev) =>
        prev.includes(catg)
          ? prev.filter((item) => item !== catg) // remove it
          : [...prev, catg] // add it
    );
  };

  const sortHandler = (value) => {
    let copyOfSelectCatg = [...filteredProducts];

    if (value === "Low to High") {
      copyOfSelectCatg.sort((a, b) => a.price - b.price);
      setfilteredProducts(copyOfSelectCatg);
    } else if (value === "High to Low") {
      copyOfSelectCatg.sort((a, b) => b.price - a.price);
      setfilteredProducts(copyOfSelectCatg);
    }
  };

  const filterByPriceBOX = () => {
    //toggle function just
    setPricefilterBOX((prev) => !prev);
  };

  useEffect(() => {
    SearchFilterHandler();
  }, [srchInputFromStore, allProductsFromRedux]);

  useEffect(() => {
    if (selectCatg.length === 0) {
      //if not checkbox is selected
      setfilteredProducts(AllProducts);
    } else {
      const prodsMatchWithCategory = AllProducts?.filter(
        (
          item //if checkbox selected then match with all products.
        ) => selectCatg.includes(item.category)
      );
      prodsMatchWithCategory && setfilteredProducts(prodsMatchWithCategory);
    }
  }, [selectCatg, AllProducts]);

  return (
    <>
      <div className=" py-2 sm:py-4  w-full   px-1 md:px-4 sm:px-8">
        <Link
        to={"/"}
        className="w-full  text-sm my-2 flex flex-nowrap justify-start items-center gap-2 text-gray-500 hover:text-black hover:font-semibold"
      >
        <BiArrowBack /> Home
      </Link>

        <Title text1={"Total"} text2={"Collections"} />

        <div className="div w-full flex flex-col gap-4  md:flex-row ">
          {/* Categories---------- */}

          <div className="md:w-[25%] md:h-[80vh] ">
            {/* //fILTER----- */}
            <div
              onClick={() => setfilterBOX((prev) => !prev)}
              className={` flex w-full gap-3 justify-start items-center flex-nowrap  text-xl md:cursor-pointer`}
            >
              <h1 className="text-[var(--heading-color)]">Filter</h1>
              <MdOutlineKeyboardArrowRight
                className={`text-[var(--heading-color)] ${
                  filterBOX ? "rotate-90 transition-all duration-200" : ""
                }`}
              />
            </div>

            <div
              className={` ${
                filterBOX ? "block " : "hidden"
              }  flex flex-col gap-2 border-r-[1px]  px-3 border-gray-400 transition-all duration-500`}
            >
              <div className="Categories w-full  py-6 rounded-sm px-4 border-[1px] border-gray-400 flex flex-col gap-2 ">
                <label className="flex gap-1 group cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => categoryHandler("Men")}
                  />
                  <h1 className="group-hover:text-[var(--main-color)] text-[var(--heading-color)]">Men</h1>
                </label>

                <label className="flex gap-1 group cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => categoryHandler("Women")}
                  />
                  <h1 className="group-hover:text-[var(--main-color)] text-[var(--heading-color)]">
                    Women
                  </h1>
                </label>

                <label className="flex gap-1 group cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => categoryHandler("Kid")}
                  />
                  <h1 className="group-hover:text-[var(--main-color)] text-[var(--heading-color)]">Kid</h1>
                </label>
              </div>
            </div>

            {/* Short by Price */}
            <select
              className={`${
                srchInputFromStore.length > 0 ? "hidden" : "block"
              }  ${
                PricefilterBOX ? "mb-30" : "mb-0"
              } outline-0 mt-3 cursor-pointer border-0 text-[var(--heading-color)]  rounded-sm py-5 `}
              onChange={(e) => sortHandler(e.target.value)}
              onClick={() => filterByPriceBOX()}
            >
              <option value="">Sort by Price</option>
              <option value="Low to High">Low to High</option>
              <option value="High to Low">High to Low</option>
            </select>
          </div>

          {/* Collections--------- */}
          <div className="Collections  w-full md:w-[75%]">
            <div className="BestSellerProducts w-full grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
              {filteredProducts?.map((item, index) => (
                <ProductDisplay
                  id={item._id}
                  key={item._id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Collections;
