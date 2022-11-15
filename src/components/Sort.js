import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {
  setGridView,
  setListView,
  sorting,
} from "../redux/actions/filterAction";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Sort = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  const { filter_products, grid_view } = filter;
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={() => dispatch(setListView())}
        >
          <BsList className="icon" />
        </button>
      </div>

      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={(event) => dispatch(sorting(event))}
          >
            <option value="featured">Featured</option>
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(highest)</option>
            <option value="a-z">Name(a-z)</option>
            <option value="z-a">Name(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
