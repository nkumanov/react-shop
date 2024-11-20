import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const isUiLoadingSelector = useSelector(
  (state: RootState) => state.ui.loading
);
