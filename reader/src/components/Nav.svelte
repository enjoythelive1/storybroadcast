<script lang="ts">
	import logo from 'images/logo.svg'
	import { _, _url } from "../localization/translate.js";
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	h1 {
		font-size: 1.5em;
		margin: 0;
		display: flex;
	}

	h1 a {
		padding: 0;
	}

	h1 img {
		height: 1em;
	}
</style>

<nav>
	<h1>
		<a href={_url('')}>
			Story Broadcast
			<img src={logo} alt="logo" />
		</a>
	</h1>
	<ul>
		<li><a href={_url('')}>{_('home')}</a></li>
		<li><a href={_url('about')}>{_('about')}</a></li>
	</ul>
</nav>
