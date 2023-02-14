export default function () {
    return (
        <div className="container">
            <h1 class="modal-heading">How To Play</h1>
            <button class="modal-close" type="button" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </button>
            <h2 class="modal-subheading">Guess the Wordle in 6 tries.</h2>
            <section class="instructions">
                <ul>
                    <li>Each guess must be a valid 5-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
                <div class="examples"><p><strong>Examples</strong></p>
                    <div class="example">
                        <div class="tile green"><div role="img" aria-roledescription="tile">W</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">E</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">A</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">R</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">Y</div></div>
                        <p><strong>W</strong> is in the word and in the correct spot.</p>
                    </div>
                    <div class="example">
                        <div class="tile"><div role="img" aria-roledescription="tile">P</div></div>
                        <div class="tile yellow"><div role="img" aria-roledescription="tile">I</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">L</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">L</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">S</div></div>
                        <p><strong>I</strong> is in the word but in the wrong spot.</p>
                    </div>
                    <div class="example">
                        <div class="tile"><div role="img" aria-roledescription="tile">V</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">A</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">G</div></div>
                        <div class="tile gray"><div role="img" aria-roledescription="tile">U</div></div>
                        <div class="tile"><div role="img" aria-roledescription="tile">E</div></div>
                        <p><strong>U</strong> is not in the word in any spot.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}