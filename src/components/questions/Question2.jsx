import React from 'react'
import Example from '../patterns/RenderCallback/example'
import Exercise from '../patterns/RenderCallback/exercise/GitHubIssueSearch'
// import Exercise from '../patterns/RenderCallback/exercise/GitHubIssueSearchInfiniteScroller'
// import Exercise from '../patterns/RenderCallback/exercise/'
import ScrollNotifier from './../patterns/RenderCallback/exercise/utils/ScrollNotifier'

const Question2 = (props) => (
  <div>
    <a name="2"></a>
    <h2>2. Render Callback</h2>
    <h3>Example</h3>
    <Example />
    <div>
    </div>
    <h3>Exercise</h3>
    Refactor the HoCs GitHubIssueSearchInfiniteScroller to be a Render Callback
    <Exercise>
      {
          // Inject logic
        (issues, fetchNextPage, isFetching) => (
          <ScrollNotifier
            style={{ height: 400 }}
            onScrollAtTheBottom={ fetchNextPage }
          >
          <ul className="issue-list">
            {issues.map(item => (
              <li key={item.id}>
                  <a href={item.html_url} target="_blank">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                  </a>
              </li>
            ))}
            {!isFetching ? null : <li className="text-center" key="loading">
                  <h2><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></h2>
              </li>
            }
          </ul>
          </ScrollNotifier>
        )
      }
    </Exercise>
    <hr />
  </div>
)

export default Question2
