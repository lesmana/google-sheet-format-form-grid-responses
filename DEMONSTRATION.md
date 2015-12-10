demonstration
=============

create form with a grid type question:

* question 1:
  * title: Name
  * type: text
* question 2:
  * title: Jog
  * type: grid
  * rows: Spring, Summer, Fall, Winter
  * columns: Yes, No, Maybe

collect some responses.

this is how it will look in spreadsheet:

| Name  | Jog [Spring] | Jog [Summer] | Jog [Fall] | Jog [Winter] |
| ----- | ------------ | ------------ | ---------- | ------------ |
| Adam  | Yes          | Maybe        | Yes        | Yes          |
| Bort  | Maybe        | No           | Maybe      | Maybe        |
| Carla | Maybe        | Maybe        | Yes        | No           |
| Dolan | Yes          | Yes          | Maybe      | No           |
| Eve   | Yes          | Maybe        | No         | No           |

count answers based on rows:

    =GRIDCOUNTROWS(raw!C2:F, raw!C1:F1, raw!B2:B, "Name")

| Name | Yes | Maybe | No |
| --- | --- | --- | --- |
| Adam | 3 | 1 | 0 |
| Bort | 0 | 3 | 1 |
| Carla | 1 | 2 | 1 |
| Dolan | 2 | 1 | 1 |
| Eve | 1 | 1 | 2 |

count answers based on columns:

    =GRIDCOUNTCOLUMNS(raw!C2:F, cleangridtitles!C1:F1, raw!B2:B, "Affinity")

| Affinity | Spring | Summer | Fall | Winter |
| --- | --- | --- | --- | --- |
| Yes | 3 | 1 | 2 | 1 |
| Maybe | 2 | 3 | 2 | 1 |
| No | 0 | 1 | 1 | 3 |

summarize answers based on rows:

    =GRIDSUMROWS(raw!C2:F, cleangridtitles!C1:F1, raw!B2:B, "Name")

| Name | Yes | Maybe | No |
| --- | --- | --- | --- |
| Adam | Spring<br>Fall<br>Winter | Summer | |
| Bort | | Spring<br>Fall<br>Winter | Summer |
| Carla | Fall | Spring<br>Summer | Winter |
| Dolan | Spring<br>Summer | Fall | Winter |
| Eve | Spring | Summer | Fall<br>Winter |

summarize answers based on columns:

    =GRIDSUMCOLUMNS(raw!C2:F, cleangridtitles!C1:F1, raw!B2:B, "Affinity")

| Affinity | Spring | Summer | Fall | Winter |
| --- | --- | --- | --- | --- |
| Yes | Adam<br>Dolan<br>Eve | Dolan | Adam<br>Carla | Adam |
| Maybe | Bort<br>Carla | Adam<br>Carla<br>Eve | Bort<br>Dolan | Bort |
| No | | Bort | Eve | Carla<br>Dolan<br>Eve |

