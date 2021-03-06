﻿var Comment = React.createClass({
    getInitialState: function () {
        return { editing: false }
    },
    edit: function () {
        this.setState({ editing: true });
    },
    remove: function () {
        console.log('Removing comment');
    },
    save: function () {
        var val = this.refs.saveText.value;
        console.log(val);
        this.setState({ editing: false });
    },
    renderNormal: function () {
        return (
            <div>
                <div className="commentContainer">
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
                <hr />
            </div>
        );
    },
    renderForm: function () {
        return (
            <div>
                <div className="commentContainer">
                    <textarea ref="saveText" defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="button-success">Save</button>
                </div>
                <hr />
            </div>
        );
    },
    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        };
    }
});

var Board = React.createClass({
    getInitialState: function () {
        return {
            comments: [
                'Initial comment #1',
                'Initial comment #2',
                'Initial comment #3',
            ]
        }
    },
    render: function () {
        return (
            <div className="board">
                {
                    this.state.comments.map(function (text, i) {
                        return (<Comment key={i}>{text}</Comment>);
                    })
                }
            </div>  
        );
    }
});

ReactDOM.render(
    <Board />,
    document.getElementById('container')
);