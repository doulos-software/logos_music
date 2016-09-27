# logos_music
Converts Hebrew and Greek text to music.  This was not my original idea, just my tools to implement it.  The folks at musicofthebible.com and mechon-mamre.org inspired me.

We start with the original, Biblical scriptures in plain text (Unicode) format.
Simply put: each letter translated directly to a musical note.
We will input some text and output a lilypond file which can utilized by any of the wonderful tools available in that ecosystem.

In version 1, because there are only 22 Hebrew and 24 Greek letters, the music will be all within two octaves and mono-rhythmic.

In version 2, maybe we can use Hebrew vowels or Greek punctuation to give note-lengths or dynamics.
OR
Maybe the combination of letters, per word, can be used to discern a rhythmic tuple.
