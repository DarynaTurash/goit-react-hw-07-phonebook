import { FilterInput, FilterLabel } from "./filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilterValue } from "redux/selectors";
import { setFilterValue } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterValue);

    return (
        <FilterLabel>
            Find contact by name
            <FilterInput type='text' onChange={(e) => dispatch(setFilterValue(e.target.value))} value={filter} />
        </FilterLabel>
    );
};

