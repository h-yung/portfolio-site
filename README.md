# Portfolio website
New responsive portfolio website (v.2), built from the ground up with as little JavaScript as possible.

**Live**: https://hyung.netlify.app/

![portfolio website preview](https://i.postimg.cc/ht8XVzqW/portfolio-redux-desktop.png)

## How it's made
**Tech used:** HTML, CSS, minimal JavaScript (temporary solution).

While there are a few design similarities here and there to an older design, I built this one from scratch to reduce CSS chaos. The breakpoints are somewhat unusual - more geared towards adjusting the design smoothly for different devices. This site is also a lot lighter: the heaviest imagery was removed from both the associated directories or replaced by lighter-weight versions, and the code is pared down to styles actively in use.

## Special features
* Light and dark modes (dark mode is default)
* Animation at top of mobile view (dark mode)

## Optimizations
* Current commentary on the light/dark mode toggle is that my previous implementation was so catastrophically inverted that reworking it to function with :root is unnecessarily difficult. The website toggle is the only way to change modes; it is not connected to system prefs/media query.
* Reorganize the CSS to reduce repetition and make things more findable.
* Try building with a mobile-first approach instead.
* Continue working through accessibility issues.

## Lessons learned
* GIFs can become extremely memory- and load-time-intensive. At some point it would be better to just embed video.
* Some experimental effects (everything is very visual-focused) might not translate well for screen reader users - aiming to consider that more in future work as well.
* Animated gif behind an overlay is probably not the best for accessibility...
* Being concise is hard for me. Poor word : image ratio.
* Stealing and adapting different modules from past projects - need to make more organized and reusable, or just expect that this will be a nonissue if I had used a library.
* Need additional tools to check accessibility - esp. color contrast questions.
* Structuring the HTML - e.g., links contained inside a nav, compared with `<ul>` with child list elements containing links, makes it easier to enlarge clickable areas for touchscreen.

## Related projects
**Cafe website:** https://github.com/h-yung/website-cafe

