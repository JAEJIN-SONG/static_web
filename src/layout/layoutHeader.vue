<template>
  <nav>
    <div class="navbar">
      <div class="navbar-inner">
        <div class="navbar-logo">DDOCKDDOCK</div>
        <div class="navbar-content">
          <ul class="navbar-menu">
            <li class="navbar-item">
              <a href="#">회사소개</a>
            </li>
            <li class="navbar-item">
              <a href="#">고객센터</a>
            </li>
            <li class="navbar-item">
              <a href="#">자주 묻는 질문</a>
            </li>
            <li class="navbar-item">
              <a href="#">토스인증서</a>
            </li>
            <li class="navbar-item">
              <a href="#">채용</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  position: fixed;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid transparent;
}

.navbar {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.navbar-inner {
  display: flex;
  width: 92%;
  height: 100%;
  margin: 0 auto;
}

.navbar-logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
}

.navbar-content {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}

.navbar-menu {
  display: flex;
}

.navbar-item {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0 8px;
}

.navbar-item a {
  text-decoration: none;
  background-color: transparent;
  color: currentColor;
}
</style>
