# strangerbook

Menu
A menu displays grouped navigation actions
 
ads via Carbon
Ship your code to production in just a few clicks. Get $200 free credit.
ads via Carbon

Kore.ai — Build an intelligent virtual assistant that has human-like conversations in 100+ languages.
AD
Menu
Types
Content
States
Variations
Types
Menu
A menu

Starting in 2.0 menus now use flexbox. This allows each menu item to automatically stretch to the size of the largest item.

Many of the following examples use a coupling with dropdowns to display dropdown menus inside of ui menu. Please consult the dropdown documentation for the correct javascript initialization for this component.

Secondary Menu
A menu can adjust its appearance to de-emphasize its contents

Pointing
A menu can point to show its relationship to nearby content



Tabular
A menu can be formatted to show tabs of information

Be sure to visit the tab documentation for information on how to set up dynamic tabs


This is an stretched grid column. This segment will always match the tab height
This is an stretched grid column. This segment will always match the tab height
Text
A menu can be formatted for text content

Vertical Menu
A vertical menu displays elements vertically..

A vertical menu's width defaults to an arbitrary size. To have it fit your content more precisely use the fluid variation in conjunction with ui grid.
Pagination
A pagination menu is specially formatted to present links to pages of content

Content
Header
A menu item may include a header or may itself be a header

<>
<nav className="ui vertical menu">
 <div className="item">
    <Link className="header">Home</div>
    <div className="menu">
      <Link to="/Posts" className="item">Others</Link>
    </Link>
  </div>
  <div className="item">
    <Link to="/Profile" className="header">Profile</div>
    <div className="menu">
      <Link to="/Messages" className="item">Messages</Link>
      <Link to="/Posts" className="item">Add Post</Link>
    </div>
  </div>
  <div className="item">
    <Link to="/account/login"className="header">Login</Link>
    <div className="menu">
      <Link to="/account/login" className="item">Sign In</Link>
      <Link to="/account/signin"className="item">Create Account</Link>
    </div>
  </div>
  </div>
</nav>


<Switch>
     <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Inbox">
          <Inbox />
        </Route>
        <Route path="/Posts">
          <Posts posts={posts} />
        </Route>
        <Route path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
</Switch>
</>


      
# strangerbook
