import actions from "./PetPageActions.json";
import API from "./PetPageAPI.js";
import { Provider, useContext, refreshOnLoad } from "./PetPageState.jsx";

export default {
    actions,
    API,
    Provider, 
    useContext,
    refreshOnLoad
};

export {
    actions as candleActions,
    API as candleAPI,
    Provider as PetPageProvider, 
    useContext as usePetPageContext,
    refreshOnLoad as refreshPetPagesOnLoad
}