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
* Reorganize the CSS to reduce repetition and make things more findable.
* Try building with a mobile-first approach instead.
* Run through axe DevTools and address identified accessibility issues.
* Build new form for contact submissions.

## Lessons learned
* GIFs can become extremely memory- and time-expensive. At some point it would be better to just embed video.
* Some experimental effects (everything is very visual-focused) might not translate well for screen reader users - aiming to consider that more in future work as well.
* Animated gif behind an overlay is probably not the best for accessibility...
* Being concise is hard for me. Poor word : image ratio.
* Stealing and adapting different modules from past projects - need to make more organized and reusable, or just expect that this will be a nonissue if I had used a library.

## Related projects
**Cafe website:** https://idyll-cafe.netlify.app/

