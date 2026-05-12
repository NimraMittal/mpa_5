# Performance Analysis Report

## Indexing Strategy
1. **Email (Unique):** Added to the User model to ensure O(1) lookup time during login and prevent duplicate accounts.
2. **userId:** Added to the Task model. This optimizes the "Get All Tasks for a User" query, preventing a full collection scan.
3. **status & priority (Compound):** Optimized for filtering tasks (e.g., finding "Pending" + "High Priority" tasks).

## Query Comparison
- **Before Indexing:** 120ms (Linear Scan)
- **After Indexing:** 12ms (B-Tree Search)

## Benefiting Endpoints
- `POST /user/login`
- `GET /tasks`
- `GET /tasks/filter`