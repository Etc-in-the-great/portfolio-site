---
name: ai-prototype-documentation
description: Document and polish AI prototype pages so visitors understand the product idea, current mock behavior, future API plan, and evidence of interaction without overstating readiness.
---

# AI Prototype Documentation

## Procedure

1. Identify what is real now:
   - static page,
   - mock interaction,
   - local state,
   - API connection,
   - or deployed route.
2. Label the current state clearly.
3. Explain the user problem in simple Chinese with English technical terms where useful.
4. Show the interaction flow: input, processing state, output, and limitations.
5. Add a small roadmap only if it helps visitors understand the next step.

## Required Honesty

- Say `No API connected yet` when no API is connected.
- Say `mock data` when outputs are local examples.
- Do not imply that user data is uploaded or processed by AI if it is not.
- Do not add API keys, backend routes, or external services unless explicitly requested.

## Verification

- Check copy for overclaiming.
- Check route works after build.
- Run `npm run lint` and `npm run build` when practical.
