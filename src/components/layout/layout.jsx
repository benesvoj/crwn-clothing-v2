import {Outlet} from "react-router-dom";
import {Navigation} from "../navigation/navigation";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../../utils/firebase/firebase.utils";
import {setCurrentUser} from "../../store/user/user.action";
import {useDispatch} from "react-redux";

export const Layout = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        return onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            dispatch(setCurrentUser(user))
        })
    }, []);

    return (
        <>
            <Navigation />
            <Outlet/>
        </>
    )
}