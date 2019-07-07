import React,{Component, Fragment} from 'react';

class User extends Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {

      const {
        name, 
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = this.props.user;

      const {loading} = this.props;

    return(
      <Fragment>
        <p>{name}</p>
      </Fragment>
    )
  }
}

export default User;