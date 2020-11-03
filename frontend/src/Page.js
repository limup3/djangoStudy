import React from "react";
import {Switch, Route } from "react-router-dom";
import {Fliming, Footer, Header } from "./components"
import { ChangePw, Login, SignUp, UserDelete } from "./pages/account";
import { BcImport, GroupAdd, GroupAddNext, GroupBcRename, GroupDetail, GroupRename } from "./pages/groupbc";
import { BcDetailEdit, BcDetail, BcEdit, BcTyping, BcEntering, EFDetail, Test } from "./pages/mybc";
import { Notice, NoticeDetail } from "./pages/notice";

//페이지 관리, App에서 page호출

const Page = () => (

    <Switch>
        <Route path="/" exact>
        <Login/>
        </Route>

        <Route path="/SignUp" >
        <SignUp/>
        </Route>

        <Route path="/UserDelete" >
        <UserDelete/>
        </Route>

        <Route path="/ChangePw" >
        <ChangePw/>
        </Route>

        <Route path="/MyBc" >
        <Footer/>
        </Route>

        <Route path="/BcEdit" >
        <Header/>
        <BcEdit/>
        </Route>
        
        <Route path="/BcDetail/:bcName/:bcPosition/:bcCompany" 
            render = {(props) => <BcDetail {...props}/>}>
        </Route>

        <Route path="/BcDetailEdit" >
        <BcDetailEdit/>
        </Route>

        <Route path="/BcTyping" >
        <BcTyping/>
        </Route>

        <Route path="/BcEntering" >
        <BcEntering/>
        </Route>

        <Route path="/EFDetail" >
        <EFDetail/>
        </Route>

        <Route path="/BcImport" >
        <BcImport/>
        </Route>

        <Route path="/GroupAdd" >
        <GroupAdd/>
        </Route>

        <Route path="/GroupAddNext" >
        <GroupAddNext/>
        </Route>

        <Route path="/GroupDetail" >
        <GroupDetail/>
        </Route>

        <Route path="/GroupRename/:groupName" 
        render = {(props) => <GroupRename {...props}/>}>
        </Route>

        <Route path="/GroupBcRename/:groupBcName" 
        render = {(props) => <GroupBcRename {...props}/>}>
        </Route>

        <Route path="/Fliming" >
        <Fliming/>
        </Route>
        
        <Route path="/Notice" >
        <Notice/>
        </Route>

        <Route path="/NoticeDetail" >
        <NoticeDetail/>
        </Route>

        <Route path="/Test" >
        <Test/>
        </Route>

    </Switch>
);

export default Page;