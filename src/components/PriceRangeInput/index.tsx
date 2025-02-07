import useCurrency from "@/hooks/useCurrency";
import useDebounce from "@/hooks/useDebounce";
import { RootState } from "@/store";
import {
  _handleOtherFilter,
  handleOtherFilter,
  handlePriceRange,
  selectProductsRootState,
  Torigin,
} from "@/store/slices/products/productsSlice";
import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type PriceRangeInputProps = {
  origin: Torigin;
};
const PriceRangeInput = (props: PriceRangeInputProps) => {
  const { origin } = props;
  const dispatch = useDispatch();
  const { priceRangeFilter, max_price } = useSelector(
    selectProductsRootState[origin]
  );
  const { formatPrice } = useCurrency();
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(
      _handleOtherFilter({
        origin,
        payload: { key: "priceRangeFilter", value },
      })
    );
  };

  return (
    <>
      <div>
        <label className="block text-sm text-gray-700 font-extralight mb-[18px]">
          Price Range:{" "}
          <span>
            {formatPrice(1, 2)} - {formatPrice(max_price, 2)}
          </span>
        </label>
        <input
          type="range"
          id="price-range"
          className="w-full accent-black-75"
          min="1"
          step="0.01"
          max={max_price}
          value={priceRangeFilter}
          onChange={handleSliderChange}
        />
      </div>
      <div className="flex justify-between text-sm text-black-75">
        <span id="minPrice">{formatPrice(1, 2)}</span>
        <span id="maxPrice">{formatPrice(Number(priceRangeFilter), 2)}</span>
      </div>
    </>
  );
};

export default PriceRangeInput;
