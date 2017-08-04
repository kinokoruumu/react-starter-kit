import React from "react";
import MyInput from "./MyInput.jsx";
import MyButton from "./MyButton.jsx";
import Hello from "./Hello.jsx";

export default class App extends React.Component {

    constructor(){
        super()
        this.state = {
            items: [],
            value: ""
        }

        this.setTextData = this.setTextData.bind(this)
        this.pushItem = this.pushItem.bind(this)
    }

    render(){
        return(
            <div>
                <MyInput value={this.state.value} onChange={this.setTextData} />
                <MyButton onClick={this.pushItem} />
                <ul>
                    {
                        this.state.items.map(item => (
                            <Hello color={item.color} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        );
    }

    setTextData(e){
        // 入力値を取得
        let value = e.target.value;

        // inputを更新する
        this.setState({ value })
    }

    pushItem(){
        // 一度変数へコピーする
        let items = this.state.items

        // デフォルト red
        let color = this.state.value || "red";

        // コピーしたものにpushする
        items.push({
            color,
            id: color.length + ~~(Math.random() * 999999)
        })

        // コピーをstateに反映させる & inputを空にする
        this.setState({ items, value: "" })
    }

}