---
layout: '../layouts/Layout.astro'
title: 'My Markdown page'
---

# Main

## Intro
This is **Markdown.**
Can I get some cool things like bulleted lists?
* a
* b
* c
  * foo
  * bar

## Code
some code:
```python
from numpy.linalg import norm
import numpy as np
a = np.random.random((7,3))
print(f"a:\n{a}\nnorm:{norm(a, axis=1)}")
from numpy.linalg import norm
import numpy as np
a = np.random.random((7,3))
print(f"a:\n{a}\nnorm:{norm(a, axis=1)}")
from numpy.linalg import norm
import numpy as np
a = np.random.random((7,3))
print(f"a:\n{a}\nnorm:{norm(a, axis=1)}")
```

## Extra features idk
* that is <u>underlined</u> and that is <del>deleted</del>
* go back to the [Intro](#intro) section
* this is a url which you can click https://astro.build
* let's go to [Mark2](./mark2)