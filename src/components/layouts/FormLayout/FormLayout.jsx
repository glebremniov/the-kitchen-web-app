import { Grid, Segment } from 'semantic-ui-react'
import { ErrorMessage } from '../../shared'
import { FormLayoutHeader } from './FormLayoutHeader'

import './FormLayout.css'

export const FormLayout = ({ title, subheader, error, children }) => (
  <Grid className='form-layout'>
    <Grid.Row centered>
      <Grid.Column
        computer={6}
        tablet={12}
        mobile={16}
      >
        <Segment padded>
          <FormLayoutHeader
            title={title}
            subheader={subheader}
          />
          {
            error && <ErrorMessage message={error.message} />
          }
          {
            children
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)